
module.exports = async (folder, callback) => {

    let result;
    let current = process.cwd()

    try {
        process.chdir(folder)
        result = await callback()
    } catch (e) {
        process.chdir(current)
        throw e
    }
    process.chdir(current)
    return result;
}