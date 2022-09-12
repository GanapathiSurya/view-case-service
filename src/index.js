import React from 'react';
import { Viewcase } from './components/Viewcase';

export default function ViewCase(props) {
  return <Viewcase caseId={props.caseId} caseStatus={props.caseStatus}/>
}
