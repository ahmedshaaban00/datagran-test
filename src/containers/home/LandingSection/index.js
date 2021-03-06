import React from 'react';
import Text from '../../../components/Text';
import Link from '../../../components/Link';

const LandingSection = () => (
  <>
    <Text type="title">Welcome to Datagran Test!</Text>
    <Text color="grey">
      Navigate through the task using the navigation menu above.
    </Text>
    <Text>
      Made by{' '}
      <Link href="https://github.com/ahmedshaaban00" target="_blank">
        Med Shaaban
      </Link>
    </Text>
  </>
);

export default LandingSection;
