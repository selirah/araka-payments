import { withTranslation } from '../i18n';
import { Layout } from '../components/home/Layout';

const IndexPage = () => <Layout title="Araka | Payment Platform" />;

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(IndexPage);
