export const handler = async () => {
	return {
		statusCode: 200,
		body: `Node ${process.version}`
	}
}
