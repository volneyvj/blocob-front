import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://api-blocob.herokuapp.com/",
    });

    this.api.interceptors.request.use(
      (config) => {
        const user = localStorage.getItem("user");
        // console.log(user)
        if (user) {
          config.headers = {
            Authorization: `Bearer ${user}`,
          };
        }
        // console.log(config)
        return config;
      },
      (error) => console.log(error)
    );

    // this.api.interceptors.response.use(
    //   (response) => response,
    //   (error) => {
    //     // console.log(error.statusCode)
    //     localStorage.removeItem('token');
    //     window.location = "/login"
    //   }
    // )
  }

  logout = () => {
    window.localStorage.clear();
    console.log("logout efetuado");
  };

  // -----  /User ROUTES   -----

  login = async (payload) => {
    try {
      const { data } = await this.api.post("/user/login", payload);
      const { id, token, neighborhood } = data;
      localStorage.setItem("user", id);
      localStorage.setItem("token", token);
      localStorage.setItem("neighborhood", neighborhood);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  signup = async (payload) => {
    console.log(payload)
    try {
      const { data } = await this.api.post("/user/signup", payload);
      const { id, token, neighborhood } = data;
      localStorage.setItem("user", id);
      localStorage.setItem("token", token);
      localStorage.setItem("neighborhood", neighborhood);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  edit = async (payload) => {
    console.log(payload)
    try {
      const { data } = await this.api.post("/user/edit", payload);

  // service,   oque eh isso????
 
  // handleUpload(theFile) {
  //   // console.log('file in service: ', theFile)
  //   return service
  //     .post('/upload', theFile)
  //     .then(res => res.data)
  //     .catch(errorHandler);
  // }
 
  // saveNewThing(newThing) {
  //   // console.log('new thing is: ', newThing)
  //   return service
  //     .post('/things/create', newThing)
  //     .then(res => res.data)
  //     .catch(errorHandler);
  // }

  /// acaba aqui

    } catch (error) {
      console.error(JSON.stringify(error.response.data));
      throw new Error(error);
    }
  };

  getUsers = async (payload) => {
    // console.log(payload)
    try {
      const { data } = await this.api.post("/user/usersn", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getUsersDetails = async (payload) => {
    try {
      const { data } = await this.api.post("/user/userdetails", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getAllUsers = async (payload) => {
    try {
      const { data } = await this.api.post("/user/allusers", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  // -----  /CLASSIFIED ROUTES    -----

  getClassifieds = async (payload) => {
    try {
      const { data } = await this.api.post("/classified/list", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getSearchedClassifieds = async (payload) => {
    try {
      const { data } = await this.api.post("/classified/list/search", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getSortedClassifieds = async (payload) => {
    try {
      const { data } = await this.api.post("/classified/list/sort", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getClassifiedsFromUser = async (payload) => {
    console.log(payload)
    try {
      const { data } = await this.api.post("/classified/list/user", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getClassifiedsDetails = async (id) => {
    try {
      const { data } = await this.api.get(`/classified/${id}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  addClassified = async (payload) => {
    try {
      const { data } = await this.api.post("/classified/add", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  editClassified = async (payload) => {
    try {
      const { data } = await this.api.post("/classified/edit", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteClassified = async (payload) => {
    try {
      const { data } = await this.api.post("/classified/delete", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  rankClassified = async (payload) => {
    try {
      const { data } = await this.api.post("/classified/rank", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  checkRankClassified = async (payload) => {
    try {
      const { data } = await this.api.post("classified/checkrank", payload);
      return data;  
    } catch (error) {
    throw new Error(error);
  }
  };


  // -- Comments ROUTES -------

  getComments = async (payload) => {
    // console.log(`ESTAMOS FALANDO DESSE: ${payload}`)
    try {
      const { data } = await this.api.post("/comment/list", { payload });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  addComment = async (payload) => {
    console.log(payload);
    try {
      const { data } = await this.api.post("/comment/add", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  answerComment = async (payload) => {
    try {
      const { data } = await this.api.post("/comment/answer", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  rankComment = async (payload) => {
    try {
      const { data } = await this.api.post("/comment/rank", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteComent = async (payload) => {
    try {
      const { data } = await this.api.post("/comment/delete", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
}
export default new Api();
