import React, { PropsWithChildren } from 'react';

import { StyledParagraph } from './Styles';

export const Paragraph = ({ children }: PropsWithChildren) => <StyledParagraph>{children}</StyledParagraph>;
