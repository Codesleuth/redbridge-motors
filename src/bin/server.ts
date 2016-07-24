import * as express from 'express';
import * as compression from 'compression';

const app = express();
app.use(compression());
app.use(express.static(__dirname + '/../public'));

app.listen(process.env.PORT || 3000);