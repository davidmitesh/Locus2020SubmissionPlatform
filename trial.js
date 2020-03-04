var _=require('lodash');
var axios=require('axios');
const form=new FormData();
var TableData=[
    {'teamname':'Alpha B','category':'Hardware','teamleader':'Mitesh Pandey','Contact':'9811491889'}
]

_.map(TableData,(item)=>{
    console.log(item);
});
