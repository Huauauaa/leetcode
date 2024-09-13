import { toCamel } from '../case';

test('toCamel', () => {
  expect(toCamel(null)).toBe(null);
  expect(toCamel(undefined)).toBe(undefined);
  expect(toCamel(1)).toBe(1);
  expect(toCamel(0)).toBe(0);
  expect(toCamel('first_name')).toBe('firstName');
  expect(toCamel(true)).toBe(true);
  expect(toCamel(true)).toBe(true);
  expect(toCamel([])).toStrictEqual([]);
  expect(toCamel({})).toStrictEqual({});
  expect(toCamel({ firstName: null })).toStrictEqual({
    firstName: null,
  });
  expect(toCamel({ firstName: undefined })).toStrictEqual({
    firstName: undefined,
  });
  expect(toCamel({ firstName: 'Harvey' })).toStrictEqual({
    firstName: 'Harvey',
  });
  expect(toCamel({ first_name: 'Harvey' })).toStrictEqual({
    firstName: 'Harvey',
  });
  expect(toCamel({ First_Name: 'Harvey' })).toStrictEqual({
    firstName: 'Harvey',
  });
  expect(toCamel([{ first_name: 'Harvey' }])).toStrictEqual([
    {
      firstName: 'Harvey',
    },
  ]);
  expect(
    toCamel({ first_name: 'Harvey', favorite_thing: ['reading'] }),
  ).toStrictEqual({
    firstName: 'Harvey',
    favoriteThing: ['reading'],
  });
});
