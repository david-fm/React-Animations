import Card from "./Card";
import { 
	animated, 
	useSpring,
	useChain,
	useSpringRef,
 } from "@react-spring/web";
import { useState } from "react";

const AnimatedCard = animated(Card);


export default function List() {
	const [down, setDown] = useState(false);

	const springRef = useSpringRef();
	const spring = useSpring({
		from: {
			y: 'calc(0vh - 0% - 0rem - 0rem)',
			scale: 1,
		},
		to: {
			y: 'calc(100vh - 100% - 5rem - 4rem)',
			scale: 2,
		},
		reverse: down,
		ref: springRef,
	  })
	
	const springRef2 = useSpringRef();
	const spring2 = useSpring({
		from: {
			scale: 1,
			x: 'calc(0% - 0rem)',
		},
		to: {
			scale: 0.5,
			x: 'calc(25% - 1rem)',
		},
		reverse: down,
		ref: springRef2,
	})

	useChain(down ? [springRef2, springRef] : [springRef, springRef2], [0, down ? 0.1 : 0.2])

    return (
        <animated.ul 
		role="list" 
		className="grid grid-cols-auto-fit p-0 gap-8 bg-white py-10 max-w-semifull" 
		style={{ ...spring}}
		onMouseEnter={() => setDown(down => !down)}
		>
			<AnimatedCard
				href="https://astro.build/chat/"
				title="Community"
				body="Come say hi to our amazing Discord community. ❤️"
				style={spring2}
			/>
		</animated.ul>
    );
}