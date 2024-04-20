import axios from "axios";
import { useLoaderStates } from "../utils/loaderStates";
import SetAllStorageCreateNGO from "./useSetAllStorageCreateNGO";

function useCreateNGO() {
  const {
    loader,
    setLoader,
    setLoaderSuccessful,
    setLoaderFailed,
    loaderFailed,
    loaderSuccessful,
    loaderWarning,
    setLoaderWarning,
  } = useLoaderStates();

  async function handleCreateNGO(
    picture: string,
    corporateName: string,
    city: string,
    country: string,
    phoneNumber: string,
    description: string
  ) {
    try {
      setLoader(true);
      const resposta = await axios.post(
        `https://250ky.wiremockapi.cloud/creatNGO`,
        {
          picture,
          corporateName,
          city,
          country,
          phoneNumber,
          description
        }
      );
      if (resposta.status === 201) {
        setLoaderSuccessful(true);
        await SetAllStorageCreateNGO({
          picture,
          corporateName,
          city,
          country,
          phoneNumber,
          description
        });
        return 201;
      }
      if (resposta.status === 409) {
        setLoaderFailed(true);
        return 409;
      }
      if (resposta.status === 500) {
        setLoaderFailed(true);
        return 500;
      }

      setLoaderSuccessful(true);
    } catch (erro) {
      console.error("Erro na requisição:", erro);
    } finally {
      setLoader(false);
    }
  }

  return {
    loader,
    setLoader,
    loaderSuccessful,
    setLoaderSuccessful,
    loaderFailed,
    setLoaderFailed,
    handleCreateNGO,
  };
}

export default useCreateNGO;
