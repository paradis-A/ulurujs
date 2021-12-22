namespace Uluru {

	export namespace enc {

		export interface encoding {

			encode: (str: string) => Uint8Array

			decode: (bytes: ArrayBufferView) => string

		}

	}
	
}