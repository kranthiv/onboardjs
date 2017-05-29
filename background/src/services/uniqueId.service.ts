let uuidV4 = require('uuid/v4');
export class UniqueIdService {
    generateUniqueId(): Promise<string | Error> {
        return new Promise<string | Error>((resolve, reject) => {
            try {
                let uuid = uuidV4();
                resolve(uuid);
            } catch (err) {
                reject(err as Error);
            }
        });
    }
}