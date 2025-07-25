import axios from "axios";

export const GetPageData = async (slug: string) => {
  try {
    const response = await axios.get(
      `https://staging.kirktechsolutions.com/wp-json/wp/v2/pages?slug=${slug}`
    );
    return response.data[0] || null;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const GetPostData = async()=>{
    try{
    const response = await axios.get('https://staging.kirktechsolutions.com/wp-json/wp/v2/posts?per_page=10&page=1');
    return response.data;
    }
    catch(error){
        console.log(error)
        return [];
    }
    finally{
      loadConfig()
    }
}

export const GetPostDetail = async(slug : string)=>{
    try{
    const response = await axios.get(`https://staging.kirktechsolutions.com/wp-json/wp/v2/posts?slug=${slug}`);
    return response.data[0] || null;
    }
    catch(error){
        console.log(error);
        return [];
    }
}


export const GetPaginatedPosts = async (page = 1, perPage = 10) => {
  try {
    const res = await axios.get(
      `https://staging.kirktechsolutions.com/wp-json/wp/v2/posts`,
      {
        params: {
          per_page: perPage,
          page: page,
        },
      }
    );

    return {
      posts: res.data,
      totalPages: parseInt(res.headers["x-wp-totalpages"]),
    };
  } catch (err) {
    console.error("Error fetching paginated posts:", err);
    return {
      posts: [],
      totalPages: 1,
    };
  }
};