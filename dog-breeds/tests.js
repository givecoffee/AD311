/* ═══════════════════════════════════════════════════════════════
   tests.js  —  In-browser test suite for Dog Breeds App
   ═══════════════════════════════════════════════════════════════ */

'use strict';

// ── Test Runner Infrastructure ───────────────────────────────────

/** Global store for all test results */
const TEST_RESULTS = [];

/**
 * Register and immediately run a single async test.
 * @param {string}   name  Human-readable test label
 * @param {Function} fn    Async test body; throw to fail
 */
async function test(name, fn) {
  const result = { name, status: 'pending', detail: '' };
  TEST_RESULTS.push(result);

  try {
    await fn();
    result.status = 'pass';
    result.detail = 'Passed ✔';
  } catch (err) {
    result.status = 'fail';
    result.detail = err.message;
  }
}

// ── Assertion Helpers ────────────────────────────────────────────

/**
 * Throw if condition is falsy.
 * @param {boolean} condition
 * @param {string}  message
 */
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

/**
 * Strict equality check.
 * @param {*}      actual
 * @param {*}      expected
 * @param {string} [msg]
 */
function assertEqual(actual, expected, msg) {
  if (actual !== expected) {
    throw new Error(
      msg ||
      `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`
    );
  }
}

/**
 * instanceof check.
 * @param {*}        value
 * @param {Function} Ctor
 * @param {string}   [msg]
 */
function assertInstanceOf(value, Ctor, msg) {
  if (!(value instanceof Ctor)) {
    throw new Error(
      msg || `Expected instance of ${Ctor.name}, got ${typeof value}`
    );
  }
}


// ══════════════════════════════════════════════════════════════
//  RUN ALL TESTS
// ══════════════════════════════════════════════════════════════

/**
 * Execute the full test suite and render results to #test-results.
 */
async function runAllTests() {
  // 1. Reset global results
  TEST_RESULTS.length = 0;

  // 2. Show running placeholder
  const container = document.getElementById('test-results');
  container.innerHTML = `
    <div class="loading">
      <span class="spinner"></span> Running tests…
    </div>
  `;

  // ── Normal Tests ─────────────────────────────────────────────

  /** N1 — apiFetch resolves and data.data is an Array */
  await test('N1 — apiFetch: resolves with object; data.data is Array', async () => {
    const data = await apiFetch(ENDPOINTS.breeds);
    assert(
      typeof data === 'object' && data !== null,
      'Response should be an object'
    );
    assertInstanceOf(data.data, Array, 'data.data should be an Array');
  });

  /** N2 — fetchBreeds returns a non-empty array with proper shape */
  await test('N2 — fetchBreeds: returns non-empty array with id + attributes', async () => {
    const breeds = await fetchBreeds();
    assertInstanceOf(breeds, Array, 'Should return an Array');
    assert(breeds.length > 0, 'Array should not be empty');
    assert(breeds[0].id         !== undefined, 'First item should have an id');
    assert(breeds[0].attributes !== undefined, 'First item should have attributes');
  });

  /** N3 — fetchBreedById returns the correct breed */
  await test('N3 — fetchBreedById: returns matching breed with string name', async () => {
    const breeds  = await fetchBreeds();
    const firstId = breeds[0].id;
    const breed   = await fetchBreedById(firstId);
    assertEqual(
      breed.id,
      firstId,
      'Returned breed id should match requested id'
    );
    assert(
      typeof breed.attributes?.name === 'string',
      'attributes.name should be a string'
    );
  });

  /** N4 — fetchFacts returns facts with string body */
  await test('N4 — fetchFacts: returns non-empty array; first item has string body', async () => {
    const facts = await fetchFacts(5);
    assertInstanceOf(facts, Array, 'Should return an Array');
    assert(facts.length > 0, 'Array should not be empty');
    assert(
      typeof facts[0].attributes?.body === 'string',
      'attributes.body should be a string'
    );
  });

  /** N5 — fetchGroups returns groups with string name */
  await test('N5 — fetchGroups: returns non-empty array; first item has string name', async () => {
    const groups = await fetchGroups();
    assertInstanceOf(groups, Array, 'Should return an Array');
    assert(groups.length > 0, 'Array should not be empty');
    assert(
      typeof groups[0].attributes?.name === 'string',
      'attributes.name should be a string'
    );
  });

  // ── Edge Tests ───────────────────────────────────────────────

  /** E1 — apiFetch with a 404 URL throws with "404" or "HTTP" in message */
  await test('E1 — apiFetch 404: throws with "404" or "HTTP" in message', async () => {
    let threw = false;
    try {
      await apiFetch(
        'https://dogapi.dog/api/v2/breeds/this-id-does-not-exist-xyz-404'
      );
    } catch (err) {
      threw = true;
      const msg = err.message;
      assert(
        msg.includes('404') || msg.includes('HTTP'),
        `Error message should contain "404" or "HTTP", got: "${msg}"`
      );
    }
    assert(threw, 'apiFetch should throw on 404');
  });

  /** E2 — fetchBreedById('') throws with "id" in message */
  await test('E2 — fetchBreedById(""): throws before network with "id" in message', async () => {
    let threw = false;
    try {
      await fetchBreedById('');
    } catch (err) {
      threw = true;
      assert(
        err.message.toLowerCase().includes('id'),
        `Error message should mention "id", got: "${err.message}"`
      );
    }
    assert(threw, 'Should throw for empty string id');
  });

  /** E3 — renderBreedList([]) shows fallback text without throwing */
  await test('E3 — renderBreedList([]): shows "No breeds" fallback; no throw', async () => {
    const el = document.createElement('ul');
    el.id    = 'breeds-list';
    document.body.appendChild(el);

    const originalGetById    = document.getElementById.bind(document);
    document.getElementById = (id) =>
      id === 'breeds-list' ? el : originalGetById(id);

    try {
      renderBreedList([]);
      assert(
        el.innerHTML.toLowerCase().includes('no breeds'),
        `innerHTML should contain "No breeds", got: "${el.innerHTML}"`
      );
    } finally {
      document.getElementById = originalGetById;
      document.body.removeChild(el);
    }
  });

  /** E4 — renderFacts(null) shows fallback text without throwing */
  await test('E4 — renderFacts(null): shows "No facts" fallback; no throw', async () => {
    const el = document.createElement('div');
    el.id    = 'facts-container';
    document.body.appendChild(el);

    const originalGetById    = document.getElementById.bind(document);
    document.getElementById = (id) =>
      id === 'facts-container' ? el : originalGetById(id);

    try {
      renderFacts(null);
      assert(
        el.innerHTML.toLowerCase().includes('no facts'),
        `innerHTML should contain "No facts", got: "${el.innerHTML}"`
      );
    } finally {
      document.getElementById = originalGetById;
      document.body.removeChild(el);
    }
  });

  /** E5 — apiFetch with a non-existent domain throws an Error instance */
  await test('E5 — apiFetch non-existent domain: throws an Error instance', async () => {
    let threw = false;
    try {
      await apiFetch(
        'https://this-domain-absolutely-does-not-exist.invalid/api'
      );
    } catch (err) {
      threw = true;
      assertInstanceOf(err, Error, 'Should throw an Error instance');
    }
    assert(threw, 'apiFetch should throw on network failure');
  });

  /** E6 — fetchBreedById(undefined) throws */
  await test('E6 — fetchBreedById(undefined): throws', async () => {
    let threw = false;
    try {
      await fetchBreedById(undefined);
    } catch (err) {
      threw = true;
      assertInstanceOf(err, Error, 'Should throw an Error instance');
    }
    assert(threw, 'fetchBreedById(undefined) should throw');
  });

  // ── Render Results ───────────────────────────────────────────

  const passed = TEST_RESULTS.filter((r) => r.status === 'pass').length;
  const failed = TEST_RESULTS.filter((r) => r.status === 'fail').length;
  const total  = TEST_RESULTS.length;

  const iconMap = { pass: '✅', fail: '❌', pending: '⏳' };

  const summaryHTML = `
    <div class="test-summary">
      🧪 ${passed} / ${total} passed &nbsp;|&nbsp; ${failed} failed
    </div>
  `;

  const itemsHTML = TEST_RESULTS.map((r) => `
    <div class="test-item ${r.status}">
      <span class="test-icon">${iconMap[r.status] ?? '⏳'}</span>
      <div>
        <div class="test-name">${r.name}</div>
        <div class="test-detail">${r.detail}</div>
      </div>
    </div>
  `).join('');

  container.innerHTML = summaryHTML + itemsHTML;

  console.table(
    TEST_RESULTS.map(({ name, status, detail }) => ({ name, status, detail }))
  );
}