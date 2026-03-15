'use strict';

// ── Constants ────────────────────────────────────────────────────
const BASE_URL = 'https://dogapi.dog/api/v2';

const ENDPOINTS = {
  breeds:    `${BASE_URL}/breeds`,
  breedById: (id) => `${BASE_URL}/breeds/${id}`,
  facts:     `${BASE_URL}/facts`,
  groups:    `${BASE_URL}/groups`,
};

// Module-level cache so we only fetch the full breed list once
let _allBreedsCache = null;


// ══════════════════════════════════════════════════════════════
//  API LAYER
// ══════════════════════════════════════════════════════════════

/**
 * Core fetch wrapper.
 * Throws on non-2xx responses; lets callers handle all errors.
 * @param {string}      url
 * @param {RequestInit} [options={}]
 * @returns {Promise<any>} Parsed JSON
 */
async function apiFetch(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status} — ${response.statusText} (${url})`
    );
  }

  return response.json();
}

/**
 * Fetch ALL dog breeds, following pagination until every page is loaded.
 * Results are cached after the first call.
 * @returns {Promise<Array>}
 */
async function fetchBreeds() {
  if (_allBreedsCache) {
    console.log('Dog Breeds (cached):', _allBreedsCache);
    return _allBreedsCache;
  }

  let allBreeds = [];
  let url       = ENDPOINTS.breeds;

  // Follow the pagination links until there is no next page
  while (url) {
    const data = await apiFetch(url);
    allBreeds  = allBreeds.concat(data.data);

    // The API returns a links.next URL when more pages exist
    url = data.links?.next ?? null;
  }

  _allBreedsCache = allBreeds;
  console.log('Dog Breeds:', _allBreedsCache);
  return _allBreedsCache;
}

/**
 * Fetch a single breed by ID.
 * @param {string} id
 * @returns {Promise<Object>}
 */
async function fetchBreedById(id) {
  if (!id) {
    throw new Error('fetchBreedById: id is required');
  }
  const data = await apiFetch(ENDPOINTS.breedById(id));
  console.log(`Breed detail [${id}]:`, data.data);
  return data.data;
}

/**
 * Fetch random dog facts.
 * @param {number} [limit=10]
 * @returns {Promise<Array>}
 */
async function fetchFacts(limit = 10) {
  const data = await apiFetch(`${ENDPOINTS.facts}?limit=${limit}`);
  console.log('Dog Facts:', data.data);
  return data.data;
}

/**
 * Fetch all dog groups.
 * @returns {Promise<Array>}
 */
async function fetchGroups() {
  const data = await apiFetch(ENDPOINTS.groups);
  console.log('Dog Groups:', data.data);
  return data.data;
}

/**
 * Return all breeds that belong to a given group.
 * Filters the cached full breed list client-side using
 * breed.relationships.group.data.id
 * @param {string} groupId
 * @returns {Promise<Array>}
 */
async function fetchBreedsByGroup(groupId) {
  if (!groupId) {
    throw new Error('fetchBreedsByGroup: groupId is required');
  }

  // Ensure the full list is loaded (uses cache on subsequent calls)
  const allBreeds = await fetchBreeds();

  const filtered = allBreeds.filter((breed) => {
    // Shape: breed.relationships.group.data.id
    const groupRef = breed.relationships?.group?.data;
    return groupRef?.id === groupId;
  });

  console.log(`Breeds in group [${groupId}]:`, filtered);
  return filtered;
}


// ══════════════════════════════════════════════════════════════
//  UI HELPERS
// ══════════════════════════════════════════════════════════════

/**
 * Reveal an error banner with a message.
 * @param {string} elementId
 * @param {string} message
 */
function showError(elementId, message) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = `⚠️ ${message}`;
  el.classList.remove('hidden');
}

/**
 * Hide an error banner.
 * @param {string} elementId
 */
function hideError(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.classList.add('hidden');
}

/**
 * Show or hide a loading indicator.
 * @param {string}  elementId
 * @param {boolean} [show=true]
 */
function showLoading(elementId, show = true) {
  const el = document.getElementById(elementId);
  if (!el) return;
  if (show) {
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}


// ══════════════════════════════════════════════════════════════
//  RENDER LAYER
// ══════════════════════════════════════════════════════════════

/**
 * Render the list of breeds into #breeds-list.
 * @param {Array} breeds
 */
function renderBreedList(breeds) {
  const list = document.getElementById('breeds-list');
  if (!list) return;

  list.innerHTML = '';

  if (!breeds || breeds.length === 0) {
    list.innerHTML = '<li>No breeds found.</li>';
    return;
  }

  breeds.forEach((breed) => {
    const li       = document.createElement('li');
    li.textContent = breed.attributes?.name ?? 'Unknown Breed';
    li.dataset.id  = breed.id;
    li.addEventListener('click', () => handleBreedClick(breed.id));
    list.appendChild(li);
  });
}

/**
 * Render breed details into the slide-in panel.
 * @param {Object} breed
 */
function renderBreedDetail(breed) {
  const content = document.getElementById('breed-detail-content');
  const panel   = document.getElementById('breed-detail');
  const overlay = document.getElementById('panel-overlay');
  if (!content || !panel) return;

  const a    = breed.attributes ?? {};
  const name = a.name ?? 'Unknown Breed';

  const lifeMin   = a.life?.min        != null ? `${a.life.min} yrs`       : 'N/A';
  const lifeMax   = a.life?.max        != null ? `${a.life.max} yrs`       : 'N/A';
  const wtMin     = a.male_weight?.min != null ? `${a.male_weight.min} kg` : 'N/A';
  const wtMax     = a.male_weight?.max != null ? `${a.male_weight.max} kg` : 'N/A';
  const hypo      = a.hypoallergenic;
  const hypoLabel = hypo ? 'Yes' : 'No';
  const hypoClass = hypo ? 'yes' : 'no';
  const desc      = a.description || 'No description available.';

  content.innerHTML = `
    <h3>${name}</h3>

    <div class="attrs-grid">
      <div class="attr-chip">
        <div class="attr-label">Min Life Span</div>
        <div class="attr-value">${lifeMin}</div>
      </div>
      <div class="attr-chip">
        <div class="attr-label">Max Life Span</div>
        <div class="attr-value">${lifeMax}</div>
      </div>
      <div class="attr-chip">
        <div class="attr-label">Min Weight</div>
        <div class="attr-value">${wtMin}</div>
      </div>
      <div class="attr-chip">
        <div class="attr-label">Max Weight</div>
        <div class="attr-value">${wtMax}</div>
      </div>
      <div class="attr-chip full-width">
        <div class="attr-label">Hypoallergenic</div>
        <span class="hypo-badge ${hypoClass}">${hypoLabel}</span>
      </div>
    </div>

    <div class="description-block">${desc}</div>
  `;

  panel.classList.remove('hidden');
  if (overlay) overlay.classList.remove('hidden');
}

/**
 * Render dog facts into #facts-container.
 * @param {Array|null} facts
 */
function renderFacts(facts) {
  const container = document.getElementById('facts-container');
  if (!container) return;

  container.innerHTML = '';

  if (!facts || facts.length === 0) {
    container.innerHTML = '<p>No facts found.</p>';
    return;
  }

  facts.forEach((fact) => {
    const card       = document.createElement('div');
    card.className   = 'fact-card';
    card.textContent = fact.attributes?.body ?? 'No fact text.';
    container.appendChild(card);
  });
}

/**
 * Render dog groups into #groups-list.
 * Each group is clickable and expands to show its breeds inline.
 * @param {Array|null} groups
 */
function renderGroups(groups) {
  const list = document.getElementById('groups-list');
  if (!list) return;

  list.innerHTML = '';

  if (!groups || groups.length === 0) {
    list.innerHTML = '<li>No groups found.</li>';
    return;
  }

  groups.forEach((group) => {
    // ── Wrapper item ───────────────────────────────────────────
    const li       = document.createElement('li');
    li.className   = 'group-item';
    li.dataset.id  = group.id;

    // ── Clickable header row ───────────────────────────────────
    const header = document.createElement('div');
    header.className = 'group-header';
    header.innerHTML = `
      <span class="group-dog-icon">🐕</span>
      <span class="group-name">${group.attributes?.name ?? 'Unknown Group'}</span>
      <span class="group-chevron">›</span>
    `;

    // ── Breed sub-list container (hidden until opened) ─────────
    const subList     = document.createElement('div');
    subList.className = 'group-breeds hidden';

    li.appendChild(header);
    li.appendChild(subList);
    list.appendChild(li);

    // ── Click: toggle open / fetch breeds ─────────────────────
    header.addEventListener('click', () =>
      handleGroupClick(
        group.id,
        group.attributes?.name ?? 'Unknown Group',
        li,
        subList
      )
    );
  });
}

/**
 * Render the breed chip list inside an expanded group.
 * @param {Array}       breeds
 * @param {HTMLElement} subList
 */
function renderGroupBreeds(breeds, subList) {
  subList.innerHTML = '';

  if (!breeds || breeds.length === 0) {
    subList.innerHTML =
      '<p class="group-breeds-empty">No breeds found in this group.</p>';
    return;
  }

  const ul       = document.createElement('ul');
  ul.className   = 'group-breeds-list';

  breeds.forEach((breed) => {
    const li       = document.createElement('li');
    li.textContent = breed.attributes?.name ?? 'Unknown Breed';

    li.addEventListener('click', (e) => {
      e.stopPropagation();
      handleBreedClick(breed.id);
    });

    ul.appendChild(li);
  });

  subList.appendChild(ul);
}


// ══════════════════════════════════════════════════════════════
//  EVENT HANDLERS
// ══════════════════════════════════════════════════════════════

/**
 * Fetch and display details for a clicked breed.
 * @param {string} id
 */
async function handleBreedClick(id) {
  try {
    const breed = await fetchBreedById(id);
    renderBreedDetail(breed);
  } catch (err) {
    showError('breeds-error', `Could not load breed details: ${err.message}`);
  }
}

/**
 * Toggle a group open/closed; fetch and filter its breeds on first open.
 * @param {string}      groupId
 * @param {string}      groupName
 * @param {HTMLElement} li
 * @param {HTMLElement} subList
 */
async function handleGroupClick(groupId, groupName, li, subList) {
  const isOpen = li.classList.contains('open');

  // Collapse if already open
  if (isOpen) {
    li.classList.remove('open');
    subList.classList.add('hidden');
    return;
  }

  // Expand
  li.classList.add('open');
  subList.classList.remove('hidden');

  // Skip re-fetching if already loaded
  if (li.dataset.loaded === 'true') return;

  // Show inline loading state
  subList.innerHTML = `
    <div class="group-breeds-loading">
      <span class="spinner"></span> Loading breeds…
    </div>
  `;

  try {
    const breeds = await fetchBreedsByGroup(groupId);
    renderGroupBreeds(breeds, subList);
    li.dataset.loaded = 'true';
  } catch (err) {
    subList.innerHTML = `
      <p class="group-breeds-error">⚠️ Could not load breeds: ${err.message}</p>
    `;
  }
}

/**
 * Wire up the four navigation buttons so only the target
 * section is visible at a time.
 */
function initNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections   = document.querySelectorAll('.section');

  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.section;

      navButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      sections.forEach((sec) => {
        const isTarget = sec.id === target;
        sec.classList.toggle('active', isTarget);
        sec.classList.toggle('hidden', !isTarget);
      });
    });
  });
}


// ══════════════════════════════════════════════════════════════
//  BOOTSTRAP
// ══════════════════════════════════════════════════════════════

/**
 * Close the detail panel and overlay.
 */
function closeDetailPanel() {
  document.getElementById('breed-detail').classList.add('hidden');
  const overlay = document.getElementById('panel-overlay');
  if (overlay) overlay.classList.add('hidden');
}

/**
 * Application entry point — runs after DOM is ready.
 */
async function init() {
  // 1. Navigation
  initNavigation();

  // 2. Close panel via button
  document.getElementById('close-detail')
    .addEventListener('click', closeDetailPanel);

  // 3. Close panel by clicking overlay
  const overlay = document.getElementById('panel-overlay');
  if (overlay) overlay.addEventListener('click', closeDetailPanel);

  // 4. Load breeds on startup
  hideError('breeds-error');
  showLoading('breeds-loading', true);
  try {
    const breeds = await fetchBreeds();
    renderBreedList(breeds);
  } catch (err) {
    showError('breeds-error', `Failed to load breeds: ${err.message}`);
    console.error('Breeds error:', err);
  } finally {
    showLoading('breeds-loading', false);
  }

  // 5. Load facts on button click
  document.getElementById('fetch-facts-btn')
    .addEventListener('click', async () => {
      hideError('facts-error');
      showLoading('facts-loading', true);
      try {
        const facts = await fetchFacts(12);
        renderFacts(facts);
      } catch (err) {
        showError('facts-error', `Failed to load facts: ${err.message}`);
      } finally {
        showLoading('facts-loading', false);
      }
    });

  // 6. Load groups on button click
  document.getElementById('fetch-groups-btn')
    .addEventListener('click', async () => {
      hideError('groups-error');
      showLoading('groups-loading', true);
      try {
        const groups = await fetchGroups();
        renderGroups(groups);
      } catch (err) {
        showError('groups-error', `Failed to load groups: ${err.message}`);
      } finally {
        showLoading('groups-loading', false);
      }
    });

  // 7. Run tests on button click
  document.getElementById('run-tests-btn')
    .addEventListener('click', () => runAllTests());
}

document.addEventListener('DOMContentLoaded', init);


// ══════════════════════════════════════════════════════════════
//  MODULE EXPORT  (Node / test environments)
// ══════════════════════════════════════════════════════════════
if (typeof module !== 'undefined') {
  module.exports = {
    apiFetch,
    fetchBreeds,
    fetchBreedById,
    fetchFacts,
    fetchGroups,
    fetchBreedsByGroup,
    renderBreedList,
    renderBreedDetail,
    renderFacts,
    renderGroups,
    renderGroupBreeds,
  };
}