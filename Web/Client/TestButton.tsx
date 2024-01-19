import * as React from 'react';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
const TestButton = (): React.ReactElement => {
	const [message, setMessage] = useState('nothing');
	// useEffect(()=>{
	//    // axios.get<string>('https://localhost:7195/api/test')
	//    //     .then((response: AxiosResponse<string>) => {
	//    //       setMessage(response.data);
	//    //     })
	//    //     .catch()
	//
	// },[]);
	useEffect(() => {
		setMessage('shutting up eslint');
	}, []);
	return (
		<div>
			Test2
			<br />
			{message}
			<br />
			<Button variant="contained">
				<FormattedMessage
					id="testButton.welcome"
					defaultMessage="Today is {ts, date, ::yyyyMMdd}"
					description="Welcome text on test button"
					values={{ ts: Date.now() }}
				/>
			</Button>
		</div>
	);
};

export default TestButton;
