import React from 'react';

import { StyledBanner } from './Styles';
import { CTA } from '../../Buttons';
import { LogoMark } from '../../Icons';

export interface BannerProps {
	theme: 'light' | 'dark';
}

export const Banner = ({ theme }: BannerProps) => (
	<StyledBanner>
		<div className="container">
			<h1>
				I write <span>efficient code</span>
				<br />
				that creates awesome <span>user experience</span>.
			</h1>
			<CTA size="large" onClick={() => null}>
				Learn how
			</CTA>
		</div>
		<LogoMark dark={theme === 'dark'} />
	</StyledBanner>
);
