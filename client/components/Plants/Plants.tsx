import { React } from '../../../deps.ts';
import Plant from './Plant.tsx';

const Plants = (props: any) => {
	const arrOfPlants = props?.plants?.map((plant: any) => {
		console.log(plant);
		return (
			<Plant key={plant.id} plant={plant} deletePlant={props.deletePlant} />
		);
	});

	return (
		<div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mx-2 my-4'>
			{arrOfPlants}
		</div>
	);
};

export default Plants;
