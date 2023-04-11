import Typography from '@mui/material/Typography';

interface Props {
	title: string;
}

export default function SamplePage({ title }: Props) {
	return (
		<>
			<Typography variant="h1" color="palette.text.primary">
				{title}
			</Typography>
			<Typography variant="body1" color="palette.text.primary">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque
				voluptatum labore iusto tempore ut quam enim, totam ad nesciunt porro
				quisquam provident. Possimus sint, suscipit nobis perferendis cumque
				voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Nihil facere iste aliquid laudantium? Delectus quos cupiditate inventore
				autem quas veniam, quod nihil commodi doloremque possimus amet
				distinctio reiciendis asperiores? Iusto. Lorem ipsum, dolor sit amet
				consectetur adipisicing elit. Excepturi, cum, deleniti odit mollitia ea
				iste quidem quas velit blanditiis fugit consequatur officiis, suscipit
				dolores maiores nobis. Totam consequuntur nemo voluptas. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Natus labore ullam nostrum
				debitis eos molestiae? Voluptatum nihil, quidem praesentium sed
				blanditiis, voluptates dicta laborum explicabo laboriosam vitae earum!
				Error, provident? Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Voluptatibus aut repudiandae labore harum nisi deserunt, sunt
				tenetur molestias. Ipsum vitae quo similique iste facilis delectus quasi
				quibusdam assumenda repellat rem?
			</Typography>
		</>
	);
}
