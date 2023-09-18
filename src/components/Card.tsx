import styles from './card.module.css'

interface CardProps {
	href: string;
	title: string;
	body: string;
	style?: React.CSSProperties;
}

export default function Card(props: CardProps) {
	
	return (

		<li className={`${styles.linkCard} mx-auto bg-accent-light`} style={props.style}>
			<a href={props.href}>
				<h2>
					{props.title}
					<span>&rarr;</span>
				</h2>
				<p>
					{props.body}
				</p>
			</a>
		</li>
		);
	}
