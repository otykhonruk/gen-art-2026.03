---
theme: default
title: Generative Art Workshop
info: |
  Minimal Slidev deck for a p5.js workshop.
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Generative Art Workshop

`p5.js` + code + live explanation

---
layout: two-cols
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
layout: two-cols
---

# sketch-00 live

<iframe
  src="./sketch-00/index.html"
  style="width: 100%; height: 440px; border: 0; background: white;"
/>

::right::

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

---

# Нотатки

- Слайди зберігаються як текст у `slides.md`
- Зображення можна складати, наприклад, у `slides/images/`
- Окремі `p5.js` приклади можна тримати в `sketch-00/`, `sketch-01/`, ...

---

# Далі

1. Редагуй `slides.md`
2. Додавай нові скетчі в окремі папки
3. Коли буде потрібно, збереш HTML через `npm run slides:build`
