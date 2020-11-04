'use strict'
const axios = require('axios');

class TruSuggest{

    static upload( accessToken, indexName, dataBinding){
        const options = {
            uploadData:dataBinding.uploadData,
            indexName
        }

        return axios({
            method:'post',
            url:'https://api.trusuggest.com/dev/index/upload',
            data:options,
            headers:{
                'Authorization': `Bearer ${accessToken}`
            }
        }).then((response)=>{
            if (response.status == 200) {
                return {
                    success: true,
                    message: 'Successfully added Document!',
                    objectId: response.data.data.objectId
                }
			}
        }).catch((err)=>{
            let errorStatus = err.response && err.response.status || 400;
            let errorMsg = err.response && err.response.statusText || 'Some thing went wrong'
            console.log(err);
            if (errorStatus == 400) {
                return {
                    success: false,
					message: errorMsg
                }
			} else {
				return {
					success: false,
					message: 'SendEvent : Oops Something went wrong!!',
					// data : JSON.stringify(response.data),
					// response : JSON.stringify(err.message),
                    error : JSON.stringify(errorMsg)
                }
			}
        });
    }

    static bulkUpload( accessToken, indexName, dataBinding){
        const options = {
            uploadData:dataBinding.uploadData,
            indexName
        }

        return axios({
            method:'post',
            url:'https://api.trusuggest.com/dev/index/bulk-upload',
            data:options,
            headers:{
                'Authorization': `Bearer ${accessToken}`
            }
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
            let errorStatus = err.response && err.response.status || 400;
            let errorMsg = err.response && err.response.statusText || 'Some thing went wrong'
            console.log(err);
            if (errorStatus == 400) {
                return {
                    success: false,
					message: errorMsg
                }
			} else {
				return {
					success: false,
					message: 'SendEvent : Oops Something went wrong!!',
					// data : JSON.stringify(response.data),
					// response : JSON.stringify(err.message),
                    error : JSON.stringify(errorMsg)
                }
			}
        });
    }

}

module.exports = TruSuggest;