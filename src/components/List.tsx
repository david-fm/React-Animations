import Card from "./Card";
import { animated, useSpring } from "@react-spring/web";

const AnimatedCard = animated(Card);


export default function List() {

	const spring = useSpring({
		from: {
		  opacity: 1,
		  y: '0%',
		},
		to: {
		  opacity: 0,
		  y: '6%',
		},
	  })

    return (
        <ul role="list" className="grid grid-cols-auto-fit p-0 gap-8">
			<Card
				href="https://docs.astro.build/"
				title="Documentation"
				body="Learn how Astro works and explore the official API docs."
			/>
			<Card
				href="https://astro.build/integrations/"
				title="Integrations"
				body="Supercharge your project with new frameworks and libraries."
			/>
			<Card
				href="https://astro.build/themes/"
				title="Themes"
				body="Explore a galaxy of community-built starter themes."
			/>
			<AnimatedCard
				href="https://astro.build/chat/"
				title="Community"
				body="Come say hi to our amazing Discord community. ❤️"
                style={spring}
			/>
		</ul>
    );
}