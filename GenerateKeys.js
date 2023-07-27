const hasPaid = {
  bob: true,
  jane: false,
  rick: true,
};

// ({ ... }) for returning objects
const objs = Object.keys(hasPaid).map((name) => ({
  name,
}));

console.log(objs);

// Output:-
// [ { name: 'bob' }, { name: 'jane' }, { name: 'rick' } ]
