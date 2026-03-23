---
theme: default
title: Генеративне Мистецтво 2026.03
info: |
  Воркшоп із генеративного мистецтва, березень 2026.
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

<style>
.demo-layout {
  column-gap: 1.5rem;
}

.demo-layout .col-left,
.demo-layout .col-right {
  display: flex;
  flex-direction: column;
  min-height: 31rem;
  padding: 1rem;
  border-radius: 1.25rem;
}

.demo-layout .col-left {
  background: #161616;
}

.demo-layout .col-right {
  background: #111111;
}

.demo-layout .demo-label {
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a3a3a3;
}

.demo-layout .col-left pre,
.demo-layout .col-left .shiki {
  flex: 1;
  min-height: 0;
  margin: 0;
  overflow: auto;
  border-radius: 0.9rem;
}

.demo-layout .col-right .demo-frame {
  width: 100%;
  flex: 1;
  min-height: 0;
  border: 0;
  border-radius: 0.9rem;
  background: #f3f3f3;
}
</style>

# Воркшоп із генеративного мистецтва

`p5.js` + code + live explanation

---
layout: two-cols
---
Про мене:
25+ років у розробці.

https://instagram.com/otykhonruk

---

# План

- Що таке generative art
- Базові примітиви у `p5.js`
- Випадковість і правила
- Перший скетч

::right::

```js
function setup() {
  createCanvas(400, 400)
  noLoop()
}
```

---

# Перший скетч

Файл: `sketch-00/sketch.js`

```js
function draw() {
  background(240)
  strokeWeight(2)

  for (let i = 0; i < 100; i++) {
    const x = random(width)
    const y = random(height)
    point(x, y)
  }
}
```

---
layout: two-cols-header
layoutClass: demo-layout
---

# sketch-00

::left::

<div class="demo-label">Code</div>

```js
function setup() {
  createCanvas(400, 400)
  noLoop()
}

function draw() {
  background(240)
  strokeWeight(2)

  for (let i = 0; i < 100; i++) {
    const x = random(width)
    const y = random(height)
    point(x, y)
  }
}
```

::right::

<div class="demo-label">Output</div>

<iframe class="demo-frame" src="./sketch-00/index.html"></iframe>

---

# Нотатки

- Слайди зберігаються як текст у `slides.md`
- Зображення можна складати, наприклад, у `slides/images/`
- Окремі `p5.js` приклади можна тримати в `sketch-00/`, `sketch-01/`, ...

---

# Далі

1. Редагуй `slides.md`
2. Додавай нові скетчі в окремі папки
3. Коли буде потрібно, збереш HTML через `npm run build`
