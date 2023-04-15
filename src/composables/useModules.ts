export function useModules(){
    const allModules=import.meta.glob('@/views/componentdemo/*/*.vue')
    return allModules
}