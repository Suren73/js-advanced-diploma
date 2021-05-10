import Character from '../Character';
import Daemon from '../Daemon';

test('testing class Character', () => {
  expect(() => new Character(1)).toThrow('Нельзя создавать объекты класса Character');
});

test('testing class Daemon', () => {
  const expected = {
    level: 1,
    attack: 10,
    defence: 40,
    health: 50,
    type: 'Daemon',
  };
  const received = new Daemon(1);
  expect(received).toEqual(expected);
});
