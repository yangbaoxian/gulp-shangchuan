var  Mock=require("mockjs")
module.exports=[{
    route: "/api/gulp",
    handle: function(req,res,next,url){
        var datas=Random.boolean()
        res.writeHead(200,{
            "Content-type":"application/json;charset=UTF-8",
            "Access-Control-Allow-Origin":"*"
        });
        res.write(JSON.stringify(datas));
        res.end()
    }
},{
    route: "/api/grr",
    handle: function(req,res,next,url){
        var datas = [
            {
                name:"下雨了"
            },
            {
                name:"拉屎拉"
            }
        ]
        res.writeHead(200,{
            "Content-type":"application/json;charset=UTF-8",
            "Access-Control-Allow-Origin":"*"
        });
        res.write(JSON.stringify(datas));
        res.end()
    }
}]