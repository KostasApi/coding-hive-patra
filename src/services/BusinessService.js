import yelp from './yelp';

class BusinessService {
  getBusinesses = async ({ limit, term, location }) => {
    try {
      const { data } = await yelp.get('/v3/businesses/search', {
        params: {
          limit,
          term,
          location
        }
      });
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getBusinessDetails = async id => {
    try {
      const { data } = await yelp.get(`/v3/businesses/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
}

const instance = new BusinessService();
export default instance;
