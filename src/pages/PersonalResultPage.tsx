import { useParams } from 'react-router-dom';

import { PersonalResult } from '../components/Result';

const PersonalResultPage = () => {
  const { id } = useParams();

  if (id !== undefined) {
    return <PersonalResult id={id} />;
  }
};

export default PersonalResultPage;
