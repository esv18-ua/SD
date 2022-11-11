const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new kafka.Producer(client);

const topics = [{
    topic: 'movimiento',
    partitions: 1,
    replicationFactor: 1
}];

client.createTopics(topics, (err, result) => {
    if (err)
        console.error("Error: ", err);
});

module.exports = producer; // Path: AA_player/producer.js