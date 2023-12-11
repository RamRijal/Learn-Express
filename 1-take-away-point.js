/* 
first do -> npm init -y

to run express app -> npm run start

install express -> npm i express
*/

/* 
(create)    c -> post
(read)      r -> get
(update)    u -> patch
(delete)    d -> delete
*/

/* 
url -> localhost:8000/?name=Apurva&age=22
        baseURL     /? query

url -> localhost:8000/product/hairdryer
        baseURL/routeParam1/routeParam2
*/




// frontend requests backend, backend gives response according to that request. This is called making API

/* 
MIDDLEWARES

middleware are the function which has req, res and next
to trigger another middleware, we have to call next()

two types of middleware
normal middleware
        (req, res, next)=>{}
        to trigger next middleware we have to call next()

error middleware
        (err, req, res, next)=>{}
        to trigger next error middleware, we have to call next("someValue")

*/


//S=M=C=R=I
// Schema ==>Object defintion 
// Model==>Array definition
// Controller ==>
// Router ==>
// Index ==> Database Connection call and router use/import 

//Dynamic Route like .route(/:any) must always be at last 


//Schema Manipulation
//Schema Validation

//Regex=> regular expressions// for validation  we use slash/


//Searching // 

//For Searching ==> find({args for search i.e value and key})
//only value matters for searching
//find({age:{$gt:18}}) greater than 18
//find({age:{$lt:18}}) less than
//find({age:{$gte:18}})greater than or equal to 18
//find({age:{$ne:18}}) not equal to 18
//find({name:{$in:["ram","hari","Sam"]}})  includes data where name is ram,hari and sam

//find({name:/^ni/}) starts with ni
//find({name:/ni$/}) includes ni


//SORTING //
// .find({}).sort("name")          a-z
// .find({}).sort("-name")          z-a
// .find({}).sort("name age")        a-z but if same names age 0-100
// .find({}).sort("name -age")         a-z but if same names age 100-0

//SELECT //
// find({name:"a"}).select(age) ==>gives only age as output of people named a

//find controls object 
//select controls object's property

//LIMIT //
// only limited objects displayed
////.find({}).limit("3"/3)==>3 objects
  
//SKIP//
//skips objects as per stated
//.find({}).skip("3") ==>skips initial 3 data

// Order ==> find-sort-select-skip-limit

//populate==> expands properties/details


//Hashing
//we use Bcrypt package so=============== npm i bcrypt

//Aysnc await always in trycatch


//Token JWT(json web token)
//Details
//Logo
//ExpiryInfo

//static folder ===> expressApp.use(express.static("./filename"))
//Accepts every file extension in static folder(mp3,jpg,png,mp4,.txt) which can be displayed in the browsser only if its inside a static folder





//ALT + SHIFT + O  ===> deleted unused/unnecessary imports   
//                ===> Manages from packages to routers systematically


// one req must have only have one res
//Cannot set headers after they are sent to the client

//MLUTAR
//its a package that takes files like images
