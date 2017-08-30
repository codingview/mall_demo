/**
 * Created by zhangrz on 2017/8/30.
 * Copyright© 2015-2020 codingview (https://github.com/codingview)
 * @version 0.0.1 created
 */

'use strict';

const express = require('express')
    , router = new express.Router();

router.get('/', (req, res)=>
    res.render('./home/view', {
        title: '首页'
    })
);

module.exports = router;
