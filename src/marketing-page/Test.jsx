//react for changes of id
// when id changes, fetch data from endpoint
// expose loading, error state and data

export const useTest = ({ id }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);


  const fetchdata = async () => {
    setLoading(true);
    try {
 const newData = await fetch(`url/${id}`);
 setData(newData);
    } catch(e) {
        setError(e);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    if(id) {
        fetchdata(id);
    }
  }. [id]);


  return {
    loading, 
    data,
    error
  }
};
