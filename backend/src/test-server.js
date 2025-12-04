const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/restaurant_mean')
.then(()=> { console.log('Mongo OK'); process.exit(0); })
.catch(err=> { console.error(err); process.exit(1); });
