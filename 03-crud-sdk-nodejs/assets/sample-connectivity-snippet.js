import couchbase from 'couchbase'

var cluster = await couchbase.connect('couchbase://localhost', {
    username: 'Administrator',
    password: 'password',
})

const bucket = cluster.bucket('travel-sample');
const collection = bucket.defaultCollection();

await collection.upsert('user:101', { name: 'Ravi', role: 'trainer' });

const result = await collection.get('user:101');
console.log(result.content);