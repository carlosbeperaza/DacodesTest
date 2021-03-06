export interface ResponseInterface {
    results: [];
    'page': number;
    'total_results': number;
    'dates': {
        'maximum': string,
        'minimum': string
    };
    'total_pages': number;
}
