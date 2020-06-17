import React from 'react';

import { scrollPastRef } from '../../../utils/functions';

import { StyledBanner } from './Styles';
import { CTA } from '../../Buttons';
import { LogoMark } from '../../Icons';

import { SocialLinks } from '../SocialLinks/SocialLinks';

export interface BannerProps {
	theme: 'light' | 'dark';
}

export const socialLinks = [
	{
		id: 'facebook',
		label: 'Facebook',
		url: 'https://www.facebook.com/zkrasovec',
	},
	{
		id: 'instagram',
		label: 'Instagram',
		url: 'https://www.instagram.com/ziga.krasovec/',
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		url: 'https://www.linkedin.com/in/zigakrasovec/',
	},
	{ id: 'github', label: 'GitHub', url: 'https://github.com/zigcccc/' },
	{ id: 'twitter', label: 'Twitter', url: 'https://twitter.com/ZigaKrasovec' },
];

export const Banner = ({ theme }: BannerProps) => {
	const bannerRef = React.useRef() as React.MutableRefObject<HTMLElement>;
	const handleCTAClick = (event: any) => {
		event.preventDefault();
		scrollPastRef(bannerRef);
	};
	return (
		<StyledBanner ref={bannerRef}>
			<div className="container">
				<h1>
					I write <span>efficient code</span>
					<br />
					that creates awesome <span>user experience</span>.
				</h1>
				<CTA size="large" onClick={handleCTAClick}>
					Learn how
				</CTA>
			</div>
			<div className="social-links-container">
				<SocialLinks links={socialLinks} />
			</div>
			<LogoMark dark={theme === 'dark'} />
		</StyledBanner>
	);
};
