import mongoose from 'mongoose'
import nconf from 'nconf'
mongoose.connect(nconf.get('mongodb'))

import './models/user'
import './models/accesstoken'