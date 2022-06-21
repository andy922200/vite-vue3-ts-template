import {
    useDemoStore 
} from './modules/demo'
import {
    useMainStore 
} from './modules/main'

const useStore = () => ({
    demo: useDemoStore(),
    main: useMainStore()
})

export default useStore
