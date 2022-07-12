import RecommendedForYou from '../models/recommendedForYou';

export const addRecommendedFroYou = (req, res, next) => {
    try {
        const result = await RecommendedForYou.insertMany(req.body);
        res.json(result);
    }catch(e) {
        next({message: "Something went wrong!", status: 500})
    }
}

export const getRecommendedForYouBeforeLogin = async(req, res, next) => {
    try {
        const result = await RecommendedForYou.find();
        res.json(result);
    } catch {
        next({message: "Something went wrong!", status: 500})
    }
}

export const getRecommendedForYouAfterLogin = async (req, res, next) => {
    try {  
        const exteriorColor = req.query.exterior_color
        
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Host": `marketcheck-prod.apigee.net`
          }

          await axios.get('http://api.marketcheck.com/v2/search/heavy-equipment/active', {
            params: {
                api_key: 'OMOV4Xoz9GXONrwlv6dvtvRuJeps33T3',
                

                }
            })
    } catch(e) {
        next({message: "something went wrong!", status: 500});
    }
}