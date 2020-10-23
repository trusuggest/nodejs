'use strict'
const axios = require('axios');

class TruSuggest{

    static upload( accessToken, indexName, dataBinding){
        const options = {
            uploadData:dataBinding.uploadData,
            indexName,
            accessToken,
        }

        return axios({
            method:'post',
            url:'http://localhost:3000/dev/index/upload',
            data:options
        }).then((response)=>{
            if (response.status == 200) {
                return {
                    success: true,
                    message: 'Successfully added Document!',
                    objectId: response.data.data.objectId
                }
			}
        }).catch((err)=>{
            let error = err.response;
            if (error.status == 400) {
                return {
                    success: false,
					message: error.statusText
                }
			} else {
				return {
					success: false,
					message: 'SendEvent : Oops Something went wrong!!',
					// data : JSON.stringify(response.data),
					// response : JSON.stringify(err.message),
                    error : JSON.stringify(error.statusText)
                }
			}
        });
    }

    static bulkUpload( accessToken, indexName, dataBinding){
        const options = {
            uploadData:dataBinding.uploadData,
            accessToken,
            indexName
        }

        return axios({
            method:'post',
            url:'http://localhost:3000/dev/index/bulk-upload',
            data:options
        }).then((response)=>{
            const size = response.data.data.size
            if (response.status == 200) {
                if( size > 50){
                    return {
                        success: true,
                        message: response.data.message,
                        size:response.data.data.size
                    }
                } else{
                    return {
                        success: true,
                        message: response.data.message,
                        objectIds: response.data.data.objectIds
                    }
                }
			}
        }).catch((err)=>{
            let error = err.response;
            if (error.status == 400) {
                return {
                    success: false,
					message: error.statusText
                }
			} else {
				return {
					success: false,
					message: 'SendEvent : Oops Something went wrong!!',
					// data : JSON.stringify(response.data),
					// response : JSON.stringify(err.message),
                    error : JSON.stringify(error.statusText)
                }
			}
        });
    }

}


TruSuggest.bulkUpload('1234567890', 'products', {uploadData:[{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},
{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},
{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},
{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},
{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},
{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},
{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},
{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},
{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
},
{
    "name":"Ramya",
    "age":12
},{
    "name":"Rohit",
    "age":14
}]}).then((resp)=>{
        console.log(resp);
        console.log('done');
    })

// module.exports = TruSuggest;