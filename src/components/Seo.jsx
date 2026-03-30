import useSeo from '../hooks/useSeo';

const Seo = ({ title, description }) => {
  useSeo({ title, description });
  return null;
};

export default Seo;
