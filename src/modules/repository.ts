import * as mongoose from 'mongoose';
import BeastSchema from './schema';

export default mongoose.model('Beast',BeastSchema,'Beasts');