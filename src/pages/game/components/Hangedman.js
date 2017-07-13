import React from 'react';
import AspectRatio from './AspectRatio';
import Limb from './HangedmanParts/Limb';
import Bar from './HangedmanParts/Bar';
import TheMan from './HangedmanParts/TheMan';
import MiddlePart from './HangedmanParts/MiddlePart';
import BottomPart from './HangedmanParts/BottomPart';
import Head from './HangedmanParts/Head';
import Neck from './HangedmanParts/Neck';
import Corpus from './HangedmanParts/Corpus';
import LeftArm from './HangedmanParts/LeftArm';
import LeftPalm from './HangedmanParts/LeftPalm';
import RightArm from './HangedmanParts/RightArm';
import RightPalm from './HangedmanParts/RightPalm';
import LeftLeg from './HangedmanParts/LeftLeg';
import LeftFoot from './HangedmanParts/LeftFoot';
import RightLeg from './HangedmanParts/RightLeg';
import RightFoot from './HangedmanParts/RightFoot';

class Hangedman extends React.Component {
  render() {
    return (
      <AspectRatio parentClass="hangedman-canvas">
        <Bar/>
        <TheMan>
          <Head/>
          <Neck/>
          <MiddlePart>
            <Corpus/>
            <Limb bodySide="left">
              <LeftArm/>
              <LeftPalm/>
            </Limb>
            <Limb bodySide="right">
              <RightArm/>
              <RightPalm/>
            </Limb>
          </MiddlePart>
          <BottomPart>
            <Limb bodySide="left">
              <LeftLeg/>
              <LeftFoot/>
            </Limb>
            <Limb bodySide="right">
              <RightLeg/>
              <RightFoot/>
            </Limb>
          </BottomPart>
        </TheMan>
      </AspectRatio>
    );
  }
}
export default Hangedman;