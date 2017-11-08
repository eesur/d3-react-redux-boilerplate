/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
  return [
    {
      id: 1,
      data: [
        {
          x: 'a',
          y: 33
        },
        {
          x: 'b',
          y: 20
        }
      ],
      title: 'One'
    },
    {
      id: 2,
      data: [
        {
          x: 'c',
          y: 73
        },
        {
          x: 'd',
          y: 10
        }
      ],
      title: 'Two'
    },
    {
      id: 3,
      data: [
        {
          x: 'e',
          y: 33
        },
        {
          x: 'f',
          y: 20
        },
        {
          x: 'g',
          y: 20
        }
      ],
      title: 'Three'
    }
  ]
}
