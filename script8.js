// Базовый класс для всех элементов интерфейса
class UIElement {
  static elements = []; // Статическое свойство для хранения всех элементов
  static defaultStyle = {
    // Статическое свойство для хранения стилей по умолчанию
    padding: "10px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
  };

  constructor(parentElement) {
    this.parentElement = parentElement;
    this.element = null; // DOM-элемент
    UIElement.elements.push(this); // Добавляем элемент в массив
  }

  // Метод для применения стилей по умолчанию
  applyDefaultStyle() {
    Object.assign(this.element.style, UIElement.defaultStyle);
  }

  // Статический метод для изменения стилей по умолчанию для всех элементов
  static updateDefaultStyles(newStyle) {
    // Обновляем стили по умолчанию
    Object.assign(UIElement.defaultStyle, newStyle);

    // Применяем новые стили ко всем элементам
    UIElement.elements.forEach((element) => element.applyDefaultStyle());
  }
}

// Класс для кнопок
class Button extends UIElement {
  constructor(text, parentElement) {
    super(parentElement);
    this.element = document.createElement("button");
    this.element.textContent = text;
    parentElement.append(this.element);
    this.applyDefaultStyle(); // Применяем стили по умолчанию
  }
}

// Класс для полей ввода
class Input extends UIElement {
  constructor(placeholder, parentElement) {
    super(parentElement);
    this.element = document.createElement("input");
    this.element.placeholder = placeholder;
    parentElement.append(this.element);
    this.applyDefaultStyle(); // Применяем стили по умолчанию
  }
}

// Создаем элементы интерфейса
const container = document.getElementById("container");
const button1 = new Button("Кнопка 1", container);
const button2 = new Button("Кнопка 2", container);
const input1 = new Input("Введите текст", container);

// Кнопка для изменения стилей по умолчанию
const updateStylesBtn = document.getElementById("updateStylesBtn");
const backgroundColorInput = document.getElementById("backgroundColorInput");

updateStylesBtn.addEventListener("click", () => {
  const newStyle = {
    backgroundColor: backgroundColorInput.value,
    color: "white",
  };
  UIElement.updateDefaultStyles(newStyle); // Применяем новые стили по умолчанию
});
