import app from './app';
import './database';

app.listen(app.get('port'));
console.log('API on port', app.get('port'));
