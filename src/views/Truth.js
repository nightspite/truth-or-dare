import React from 'react';
import questions from 'json/questions.json';
import Card from 'components/organisms/Card';
import { withRouter } from 'react-router-dom';

const Truth = () => <Card data={questions} type="truth" />;

export default withRouter(Truth);
