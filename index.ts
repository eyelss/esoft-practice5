// Задача 1. Типы и опциональные свойства
// Создайте интерфейс User с полями:

interface User {
  id: number;
  name: string;
  age?: number;
  email?: string;
};

const users: User[] = [
  { id: 0, name: 'John', age: 21, email: 'johngoodman@example.com' },
  { id: 1, name: 'Sam', age: 33, email: 'password123@example.com' },
  { id: 2, name: 'Elena', age: 24 },
  { id: 3, name: 'James', age: 29 },
  { id: 4, name: 'Sonya' },  
];

// Задача 2. Расширение типов
// Создайте интерфейс Admin, который расширяет User и добавляет поле:
// Создайте объект типа Admin.

interface Admin extends User {
  role: 'admin' | 'superadmin';
}

const admin: Admin = {
  id: 5,
  name: 'Bobby',
  role: 'superadmin',
};

// Задача 3. Функции с типами
// Напишите функцию greetUser, которая принимает объект типа User и возвращает строку приветствия. Если есть age, добавляйте её в приветствие.

const greetUser = (user: User): string => {
  const statements = [`Hello, ${user.name}!`];
  
  if (user.age !== undefined) {
    statements.push(`You're ${user.age} years old!`)
  }

  return statements.join(' '); 
}

console.log(greetUser(admin));

// Задача 5. Enum и as const

enum UserRole {
  Admin,
  User,
  Guest,
}

interface NewAdmin extends User {
  role: UserRole,
}

const admin2: NewAdmin = {
  id: 6,
  name: 'Chris',
  role: UserRole.Guest,
}

// Задача 6. Создайте объект UserStatus с тремя статусами:

const UserStatus = {
  Active: 'active',
  Inactive: 'inactive',
  Pending: 'pending',
} as const;

// Создайте тип UserStatusType на основе этого объекта так, 
// чтобы переменная этого типа могла принимать только значения "active" | "inactive" | "pending".

type UserStatusType = typeof UserStatus[keyof typeof UserStatus];

// Задача 7:
// Создайте класс Car с полями и методами:

class Car {
  private mileage: number = 0;
  constructor(
    private make: string,
    private model: string,
    private year: number,
  ) {}

  drive(distance: number): void {
    this.mileage += distance;
  }

  getDescription(): string {
    return `Car: ${this.make}, model: ${this.model}, year of release: ${this.year}, driven: ${this.mileage}`
  }
}

type Status = 'active' | 'inactive' | 0 | 1;

interface User {
  status?: Status,
}

const getDescriptionByStatus = (status: Status): string => {
  switch (status) {
    case 1:
    case 'active':
      return 'User is active!';
    case 0:
    case "inactive":
      return 'User is inactive!';
  }
}