import React from 'react';
import dares from 'json/dares.json';
import Card from 'components/organisms/Card';
import { withRouter } from 'react-router-dom';

const Dare = () => <Card data={dares} type="dare" />;

export default withRouter(Dare);
